import { v4 as uuidv4 } from 'uuid';
import moba from '../images/moba.png';
import Paytrixx from '../images/paytrixx.png';
import proessayhelp from '../images/proessayhelp.png';
import aptofa from '../images/aptofa.png';
import tapme from '../images/tapme.png';
import surigao from '../images/surigao.jpg';
import paps from '../images/paps.png';
import zool from '../images/zool.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Paytrixx',
    desc: 'A Cross-Platform Digital Wallet Cashless Mobile Financial Application',
    img: Paytrixx,
  },
  {
    id: uuidv4(),
    name: 'ProessayHelper',
    desc: 'Website Platform For Essay Writers To Help Students and Professionals',
    img: proessayhelp,
  },
  {
    id: uuidv4(),
    name: 'Aptofa',
    desc: 'A Cross Platform Mobile Application For People Who Have Social Anxiety To Interact With Each Other And Help Each Other',
    img: aptofa,
  },
  {
    id: uuidv4(),
    name: 'TapMeTapYou',
    desc: 'Cross-Platform Dating Application Just Like Tinder Built in Flutter',
    img: tapme,
  },
  {
    id: uuidv4(),
    name: 'Luminous Glory',
    desc: 'A Personal MOBA Project Built in Unity3d Will Integrate Blockchain on the Game Soon.',
    img: moba,
  },
  {
    id: uuidv4(),
    name: 'Paps Food Delivery',
    desc: 'Local Food Delivery Application For Filipino made by Filipino.',
    img: paps,
  },
  {
    id: uuidv4(),
    name: 'SuroIAO Travel Guide',
    desc: 'Local Food Delivery Application For Filipino made by Filipino.',
    img: surigao,
  },
  {
    id: uuidv4(),
    name: 'Zool Pest Control',
    desc: 'Automated Pest Control Appointment Scheduler',
    img: zool,
  },
];

export default projects;
