import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [openTrack, setOpenTrack] = useState(false);
  const [trackId, setTrackId] = useState("");
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const goTrack = () => {
    const cleaned = trackId.trim().toUpperCase();
    if (!cleaned) return;
    navigate(`/track/${cleaned}`);
    setTrackId("");
    setOpenTrack(false);
  };

  useEffect(() => {
    const onMouseDown = (e) => {
      if (!openTrack) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenTrack(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [openTrack]);

  useEffect(() => {
    if (openTrack) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [openTrack]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") goTrack();
    if (e.key === "Escape") setOpenTrack(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link" aria-label="Go to home">
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>

        <div className="navbar-right">
          <ul className="navbar-menu">
            <li><a href="#technology">Technology</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <div className="track-dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="track-btn"
              onClick={() => setOpenTrack((v) => !v)}
            >
              Track your order
            </button>

            {openTrack && (
              <div className="track-panel">
                <input
                  ref={inputRef}
                  className="track-panel-input"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="e.g. A1B2C3D4"
                  aria-label="Tracking ID"
                />

                <button type="button" className="track-panel-submit" onClick={goTrack}>
                  Track
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
