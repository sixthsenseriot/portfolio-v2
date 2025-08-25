import { useEffect, useRef, useState } from "react";
import "./FloatingEmojis.css";

const emojis = [
    "🌽",
    "🥔",
    "🍠",
    "🍚",
    "🍞",
    "🥐",
    "🥖",
    "🥯",
    "🫓",
    "🍙",
    "🍘",
    "🍛",
    "🍣",
    "🍱",
    "🥨",
    "🧇",
    "🥞",
    "🥟",
    "🍝",
    "🍜",
    "🫔",
    "🌯",
    "🌮",
    "🍿",
    "🍟",
];

const COUNT = 40;

const FloatingEmojis = () => {
    const [particles, setParticles] = useState([]);
    const didInit = useRef(false);

    const randomProps = () => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 14,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 2,
    });

    useEffect(() => {
        if (didInit.current) return;
        didInit.current = true;

        const base = emojis.map((emoji, i) => ({
            id: i,
            emoji,
            ...randomProps(),
        }));

        const extraCount = Math.max(0, COUNT - base.length);
        const extras = Array.from({ length: extraCount }, (_, idx) => ({
            id: base.length + idx,
            emoji: emojis[idx % emojis.length],
            ...randomProps(),
        }));

        const shuffled = [...base, ...extras].sort(() => Math.random() - 0.5);

        setParticles(shuffled);
    }, []);

    return (
        <div className="floating-emojis-container">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="floating-emoji"
                    style={{
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                >
                    {p.emoji}
                </div>
            ))}
        </div>
    );
};

export default FloatingEmojis;
