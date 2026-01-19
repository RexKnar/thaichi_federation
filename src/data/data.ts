
import color from "utils/color";

import Target from 'icons/lineal/Target';
import Shield from 'icons/lineal/Shield';
import List from 'icons/lineal/List';
import Team from "icons/lineal/Team";
import User from 'icons/lineal/User';
import Home from 'icons/lineal/Home';

export const whyTaiChi = [
  {
    id: 1,
    Icon: Shield, // lineage, tradition, authenticity
    color: color.green,
    title: 'Authentic Yang Style Tai Chi lineage',
    description: `Learn Tai Chi rooted in an authentic Yang family tradition, passed down through generations and taught with respect for its classical principles and philosophy.`
  },
  {
    id: 2,
    Icon: List, // structured progression
    color: color.green,
    title: 'Structured training from beginner to advanced levels',
    description: `A clear and progressive curriculum that guides students step by step, from foundational movements and theory to advanced forms and internal practices.`
  },
  {
    id: 3,
    Icon: Target, // posture, balance, focus
    color: color.green,
    title: 'Emphasis on posture, balance, and internal energy',
    description: `Training focuses on correct body alignment, stable balance, and the cultivation of internal energy (Qi) to improve both physical health and mindful awareness.`
  },
  {
    id: 4,
    Icon: Team, // traditional forms / sequences
    color: color.green,
    title: 'Traditional forms including the classical 85-form',
    description: `Practice time-honored Tai Chi forms, including the traditional Yang-style 85-form, preserving the depth, flow, and martial integrity of the art.`
  },
  {
    id: 5,
    Icon: Home, // health, stress reduction, wellbeing
    color: color.green,
    title: 'Helps reduce stress, anxiety, and improves sleep quality.',
    description: `Slow, meditative movements combined with mindful breathing help calm the nervous system, reduce daily stress, and promote deeper, more restful sleep.`
  },
  {
    id: 6,
    Icon: User, // accessibility, seniors
    color: color.green,
    title: 'Gentle, low-impact movements suitable for senior citizens',
    description: `Soft, controlled movements place minimal strain on joints, making Tai Chi a safe and accessible practice for seniors and those seeking gentle exercise.`
  }
];



// used in the services-7 block
// export const serviceList = [
//     {
//       id: 1,
//       Icon: Target,
//       color: color.green,
//       title: 'Beginner & Foundation Classes',
//       description: `Learn the basics step by step`
//     },
//     { 
//       id: 2,
//       Icon: Medal,
//       color: color.green,
//       title: 'Advanced Forms & Push Hands ',
//       description: `Deepen your practice`
//     },
//     {
//       id: 3,
//       Icon: Team,
//       color: color.green,
//       title: 'Private Sessions',
//       description: `Personalized training at your pace`
//     },
//     {
//       id: 4,
//       Icon: ShopTwo,
//       color: color.green,
//       title: 'Workshops & Retreats ',
//       description: `Enrich your journey in beautiful natural settings `
//     }
//   ];

export const serviceList = [
  {
    id: 1,
    Icon: Target,
    color: color.green,
    title: 'Regular Tai Chi Classes',
    description: `Easy-to-learn classes that help improve health, flexibility, balance,
and mental calm.`
  },
  {
    id: 2,
    Icon: Target,
    color: color.green,
    title: 'Advanced Master Training Courses',
    description: `Higher-level training for students who wish to deepen
their Tai Chi practice and skills.`
  },
  {
    id: 3,
    Icon: Target,
    color: color.green,
    title: 'Instructor Development Programs',
    description: `Training for those who want to become confident and
qualified Tai Chi teachers.`
  },
  {
    id: 4,
    Icon: Target,
    color: color.green,
    title: 'Certification under Tai Chi Federation of India',
    description: `Recognized certification that confirms
proper training and learning standards.`
  },
];
export const courseList = [
  {
    id: 1,
    link: '#',
    avatar: 'FD',
    time: '30–45 min demo session',
    location: 'Can be done in formal clothes, no equipment',
    avatarColor: 'bg-purple',
    title: 'TaiChi For Professionals'
  }
];