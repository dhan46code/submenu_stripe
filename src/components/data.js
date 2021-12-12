import React from 'react';
import { FaBuyNLarge } from 'react-icons/fa';
import {
  MdCardMembership,
  MdMuseum,
  MdOutlineEventNote,
  MdOutlineExplore,
  MdOutlineCollections,
  MdHomeWork,
  MdDraw,
} from 'react-icons/md';
import { RiGuideFill } from 'react-icons/ri';

const sublinks = [
  {
    page: 'visit',
    link: [
      { icon: <FaBuyNLarge />, name: 'buy ticket' },
      { icon: <MdCardMembership />, name: 'become a member' },
      { icon: <RiGuideFill />, name: 'tour guide' },
      { icon: <MdMuseum />, name: 'museum map' },
    ],
  },
  {
    page: 'exhibitions',
    link: [
      { icon: <MdOutlineExplore />, name: 'exhibitions' },
      { icon: <MdOutlineEventNote />, name: 'event' },
    ],
  },
  {
    page: 'art',
    link: [
      { icon: <MdOutlineCollections />, name: 'art collection' },
      { icon: <MdHomeWork />, name: 'art at home' },
      { icon: <MdDraw />, name: 'perspectives' },
    ],
  },
];

export default sublinks;
