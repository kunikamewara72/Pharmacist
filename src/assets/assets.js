import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
];
export const professionals = [
    {
        _id: 'prof1',
        name: 'John Smith',
        image: doc1,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '4 Years',
        about: 'John specializes in compounding medications tailored to individual patient needs, ensuring personalized and effective treatment.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof2',
        name: 'Sarah Johnson',
        image: doc2,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '3 Years',
        about: 'Sarah is experienced in creating customized medications with precision, catering to unique patient requirements.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof3',
        name: 'Emily Davis',
        image: doc3,
        speciality: 'Registered Nurse',
        degree: 'RN, BSN',
        experience: '2 Years',
        about: 'Emily is committed to providing compassionate care and ensuring patient comfort and well-being.',
        fees: 40,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof4',
        name: 'Michael Brown',
        image: doc4,
        speciality: 'Registered Nurse',
        degree: 'RN',
        experience: '4 Years',
        about: 'Michael offers expert nursing care with a focus on patient education and recovery support.',
        fees: 50,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof5',
        name: 'Jennifer Lopez',
        image: doc5,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '5 Years',
        about: 'Jennifer specializes in crafting medications for complex conditions, ensuring patient-specific solutions.',
        fees: 60,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof6',
        name: 'Christopher Lee',
        image: doc6,
        speciality: 'Registered Nurse',
        degree: 'RN',
        experience: '3 Years',
        about: 'Christopher is dedicated to delivering professional and empathetic care to his patients.',
        fees: 45,
        address: {
            line1: '67th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof7',
        name: 'Sophia White',
        image: doc7,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '6 Years',
        about: 'Sophia provides innovative solutions through expertly compounded medications.',
        fees: 70,
        address: {
            line1: '77th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof8',
        name: 'Liam Green',
        image: doc8,
        speciality: 'Registered Nurse',
        degree: 'RN, BSN',
        experience: '5 Years',
        about: 'Liam excels in patient care and recovery, ensuring quality and comfort for all.',
        fees: 50,
        address: {
            line1: '87th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    }
];