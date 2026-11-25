import { useEffect, useRef } from 'react';

const LINK_DISTANCE = 140;
const MOUSE_DISTANCE = 180;
const COLORS = ['183, 169, 240', '147, 188, 220'];

/**
 * Red neuronal animada: nodos que flotan y se conectan cuando están cerca.
 * Reacciona al cursor, se pausa fuera de pantalla y respeta "reducir movimiento".
 */
const NeuralBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = 0;
        let height = 0;
        let nodes = [];
        let frameId = null;
        let visible = true;
        const mouse = { x: -9999, y: -9999 };

        const createNodes = () => {
            const count = Math.min(90, Math.floor((width * height) / 15000));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                r: Math.random() * 1.4 + 0.6,
                color: COLORS[Math.random() < 0.65 ? 0 : 1],
            }));
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            createNodes();
            draw();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];

                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist < LINK_DISTANCE) {
                        ctx.strokeStyle = `rgba(${a.color}, ${0.14 * (1 - dist / LINK_DISTANCE)})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                const mouseDist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                if (mouseDist < MOUSE_DISTANCE) {
                    ctx.strokeStyle = `rgba(${a.color}, ${0.35 * (1 - mouseDist / MOUSE_DISTANCE)})`;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }

                ctx.fillStyle = `rgba(${a.color}, ${mouseDist < MOUSE_DISTANCE ? 0.9 : 0.5})`;
                ctx.beginPath();
                ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                ctx.fill();
            }
        };

        const step = () => {
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
            }
            draw();
            frameId = requestAnimationFrame(step);
        };

        const start = () => {
            if (!reduceMotion && visible && !document.hidden && frameId === null) {
                frameId = requestAnimationFrame(step);
            }
        };

        const stop = () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
            frameId = null;
        };

        const onPointerMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            if (reduceMotion) draw();
        };

        const onPointerLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        const onVisibility = () => (document.hidden ? stop() : start());

        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            visible ? start() : stop();
        });

        const resizeObserver = new ResizeObserver(resize);
        const section = canvas.parentElement;

        resizeObserver.observe(canvas);
        observer.observe(canvas);
        section.addEventListener('pointermove', onPointerMove);
        section.addEventListener('pointerleave', onPointerLeave);
        document.addEventListener('visibilitychange', onVisibility);
        start();

        return () => {
            stop();
            resizeObserver.disconnect();
            observer.disconnect();
            section.removeEventListener('pointermove', onPointerMove);
            section.removeEventListener('pointerleave', onPointerLeave);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 size-full"
            style={{
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            }}
        />
    );
};

export default NeuralBackground;
