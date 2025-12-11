import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading,
    icon,
    className = '', 
    disabled,
    ...props 
}) => {
    return (
        <button 
            className={`btn btn-${variant} btn-${size} ${className}`} 
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <span className="spinner" />}
            {!isLoading && icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};
