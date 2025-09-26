import { useEffect } from 'react';
import snowflakeImg from './components/stickers/snowflake.png';

export default function Snowflakes() {
  useEffect(() => {
    const snowContainer = document.createElement('div');
    snowContainer.style.position = 'fixed';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
    snowContainer.style.zIndex = '0';
    document.body.appendChild(snowContainer);

    const createSnowflake = () => {
      const snowflake = document.createElement('img');
      const size = Math.random() * 4 + 15;
      snowflake.src = snowflakeImg;
      snowflake.alt = 'snowflake';
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.position = 'absolute';
      snowflake.style.top = '-10px';
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.opacity = String(Math.random());
      snowflake.style.filter = 'blur(1px)';
      snowflake.style.animation = `fall ${5 + Math.random() * 5}s linear forwards`;
      snowflake.style.pointerEvents = 'none';
      snowContainer.appendChild(snowflake);
      setTimeout(() => snowflake.remove(), 10000);
    };

    const interval = setInterval(createSnowflake, 150);

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `@keyframes fall { 0% { transform: translateY(0); } 100% { transform: translateY(${window.innerHeight}px); } }`;
    document.head.appendChild(styleTag);

    return () => {
      clearInterval(interval);
      snowContainer.remove();
      styleTag.remove();
    };
  }, []);

  return null;
}
