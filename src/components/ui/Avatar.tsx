import React from 'react';
import './Avatar.css';

interface AvatarProps {
    src?: string;
    alt?: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    status?: 'online' | 'offline';
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, size = 'md', status }) => {
    return (
        <div className={`avatar avatar-${size}`}>
            {src ? (
                <img src={src} alt={alt || 'avatar'} className="avatar-image" />
            ) : (
                <div className="avatar-fallback">{fallback}</div>
            )}
            {status && <span className={`avatar-status status-${status}`} />}
        </div>
    );
};
