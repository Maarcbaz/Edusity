import { Program_icon1, Program_icon2, Program_icon3, Play_icon, Msg_icon, Mail_icon, Phone_icon, Location } from "../assets/icons"
import { Program1, Program2, Program3 } from "../assets/program"
import { AboutImg, Gallery1, Gallery2, Gallery3, Gallery4 } from "../assets/gallery"
import { User1, User2, User3, User4 } from "../assets/user"


export const HeroText = [
    {
        header: "We Ensure better education for a better world",
        paragraph: "our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education"
    }
]

export const ProgramImg = [
    {
        program: Program1,
        ProgramSM: Program_icon1,
        programTxt: "graduation degree",
        animation: "fade-right"
    },
    {
        program: Program2,
        ProgramSM: Program_icon2,
        programTxt: "masters degree",
        animation: "fade-up"

    },
    {
        program: Program3,
        ProgramSM: Program_icon3,
        programTxt: "post graduation",
        animation: "fade-left"

    },
]

export const AboutSec = [
    {
        img1: AboutImg,
        aboutTxt: "about university",
        header: "nurturing tomorrow's",
        headerspan: "leaders today",
        play: Play_icon,
        par1: "Embark on a transformative educational journey with our university's comprehensive education programs. our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to exel in the dynamic field of education.",
        par2: "With a focus on innovation, hand-on learning, and persoalized mentorship, our programs prepare aspiring educat ors to make a meaningful impact in classrooms, schools, and communities.",
        par3: "Whether you aspire to become a teacher, administrator, counselor, or educstional leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full pontentisl in shaping the future of education."
    }
]

export const GalleryImg = [
    { src: Gallery1, alt: "Gallery1", animation: "flip-right" },
    { src: Gallery2, alt: "Gallery2", animation: "flip-right" },
    { src: Gallery3, alt: "Gallery3", animation: "flip-right" },
    { src: Gallery4, alt: "Gallery4", animation: "flip-right" },
]

export const Cards = [
    {
        img: User2,
        name: "william jackford",
        school: "Edusity, USA",
        speech: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, have truly exceeded my expectations."
    },
    {
        img: User1,
        alt: "Angela James",
        name: "william jackford",
        school: "Edusity, USA",
        speech: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, have truly exceeded my expectations."
    },
    {
        img: User3,
        name: "Jane Smith",
        school: "Edusity, USA",
        speech: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, have truly exceeded my expectations."
    },
    {
        img: User4,
        name: "Austin Cooker",
        school: "Edusity, USA",
        speech: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, have truly exceeded my expectations."
    },
    {
        img: User2,
        name: "Henry william ",
        school: "Edusity, USA",
        speech: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, have truly exceeded my expectations."
    }
]

export const ContactInfo = [
    {
        info: "send us a messages",
        infoIcon: Msg_icon,
        infoText: "Feel free to reach out through contact from or find our contact informations below. Your feedback, questions, and suggestions are impoertant to us as we strive to provide exceptional service to our university community",
        email: "Olayemiabaz@gmail.com",
        MailIcon: Mail_icon,
        PhoneIcon: Phone_icon,
        addressIcon: Location,
        contact: "+234 8119482391",
        address: "12, Awonusi street, Lagos Nigeria"
    }
]

export const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};