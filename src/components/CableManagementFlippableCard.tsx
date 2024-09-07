import React from 'react';
import '../assets/custom-css/FlippableCard.css';
import { Link } from 'react-router-dom';
import { FlippableCardBackContent } from './FlippableCardBackContent';
import { FlippableCardFrontContent } from './FlippableCardFrontContent';

interface FlippableCardProps {
  to: string;
  frontImg: string;
  backImg: string;
}

export const CableManagementFlippableCard: React.FC<FlippableCardProps> = ({ to, frontImg, backImg }) => {
  return (
    <Link to={to} className="flippable-card">
      <div className="flippable-card-inner">
        <div className="flippable-card-front">
          {<FlippableCardFrontContent img={frontImg} />}
        </div>
        <div className="flippable-card-back">
          {<FlippableCardBackContent img={backImg} />}
        </div>
      </div>
    </Link>
  );
};

