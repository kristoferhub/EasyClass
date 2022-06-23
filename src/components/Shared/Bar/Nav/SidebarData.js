import react from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"


export const SidebarData = [
    [
    {
        title: 'Home',
        path: '/DashBoardStudent',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Editar Perfil',
        path: '/profile',
        icon: <IoIcons.IoMdContact/>,
        cName: 'nav-text'
    },
    
    {
        title: 'Agenda de Aulas',
        path: '',
        icon: <IoIcons.IoMdCalendar/>,
        cName: 'nav-text'
    },

    {
        title: 'Buscar Professor',
        path: '/SearchTeacher',
        icon: <IoIcons.IoIosSearch/>,
        cName: 'nav-text'
    },

    {
        title: 'Mensagens',
        path: '',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },

    {
        title: 'Suporte',
        path: '',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },

    {
        title: 'Modo escuro',
        path: '',
        icon: <IoIcons.IoIosSunny/>,
        cName: 'nav-text'
    },

    {
        title: 'Sair',
        path: '',
        icon: <IoIcons.IoMdExit/>,
        cName: 'nav-text'
    },
    ],
    
    [
        {
            title: 'Home',
            path: '/DashBoardProfessor',
            icon: <AiIcons.AiFillHome/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Editar Perfil',
            path: '/profile',
            icon: <IoIcons.IoMdContact/>,
            cName: 'nav-text'
        },
        
        {
            title: 'Agenda de Aulas',
            path: '',
            icon: <IoIcons.IoMdCalendar/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Seus Alunos',
            path: '',
            icon: <IoIcons.IoIosSearch/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Mensagens',
            path: '',
            icon: <FaIcons.FaEnvelopeOpenText/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Suporte',
            path: '',
            icon: <IoIcons.IoMdHelpCircle/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Modo escuro',
            path: '',
            icon: <IoIcons.IoIosSunny/>,
            cName: 'nav-text'
        },
    
        {
            title: 'Sair',
            path: '',
            icon: <IoIcons.IoMdExit/>,
            cName: 'nav-text'
        },
    ]
]
