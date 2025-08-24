import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import "./style.css";

const ANIMATION_DURATION_MS = 5000;

export const UnifiedLoading = () => {
  const navigate = useNavigate();
  const isMobile = useMemo(() => typeof window !== "undefined" && window.innerWidth < 1024, []);

  useEffect(() => {
    if (isMobile) {
      navigate("/", { replace: true });
      return;
    }

    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile, navigate]);

  if (isMobile) return null;

  return (
    <div className="unified-loading">
      <div className="logo-wrap">
        <Logo variant="white" img="/img/vector-74-18.png" />
      </div>
      <div className="ticker">
        <div className="tick tick-1" />
        <div className="tick tick-2" />
        <div className="tick tick-3" />
        <div className="tick tick-4" />
      </div>
    </div>
  );
};


