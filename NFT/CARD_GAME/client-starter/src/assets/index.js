// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import ace from './cards/Ace.png';
import bakezori from './cards/Bakezori.png';
import blackSolus from './cards/Black_Solus.png';
import calligrapher from './cards/Calligrapher.png';
import chakriAvatar from './cards/Chakri_Avatar.png';
import coalfist from './cards/Coalfist.png';
import desolator from './cards/Desolator.png';
import duskRigger from './cards/Dusk_Rigger.png';
import flamewreath from './cards/Flamewreath.png';
import furiosa from './cards/Furiosa.png';
import geomancer from './cards/Geomancer.png';
import goreHorn from './cards/Gore_Horn.png';
import heartseeker from './cards/Heartseeker.png';
import jadeMonk from './cards/Jade_Monk.png';
import kaidoExpert from './cards/Kaido_Expert.png';
import katara from './cards/Katara.png';
import kiBeholder from './cards/Ki_Beholder.png';
import kindling from './cards/Kindling.png';
import lanternFox from './cards/Lantern_Fox.png';
import mizuchi from './cards/Mizuchi.png';
import orizuru from './cards/Orizuru.png';
import scarletViper from './cards/Scarlet_Viper.png';
import stormKage from './cards/Storm_Kage.png';
import suzumebachi from './cards/Suzumebachi.png';
import tuskBoar from './cards/Tusk_Boar.png';
import twilightFox from './cards/Twilight_Fox.png';
import voidTalon from './cards/Void_Talon.png';
import whiplash from './cards/Whiplash.png';
import widowmaker from './cards/Widowmaker.png';
import xho from './cards/Xho.png';

// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,
];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,

  ace,
  bakezori,
  blackSolus,
  calligrapher,
  chakriAvatar,
  coalfist,
  desolator,
  duskRigger,
  flamewreath,
  furiosa,
  geomancer,
  goreHorn,
  heartseeker,
  jadeMonk,
  kaidoExpert,
  katara,
  kiBeholder,
  kindling,
  lanternFox,
  mizuchi,
  orizuru,
  scarletViper,
  stormKage,
  suzumebachi,
  tuskBoar,
  twilightFox,
  voidTalon,
  whiplash,
  widowmaker,
  xho,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];