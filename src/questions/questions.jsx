import React,{createContext,useState} from 'react';

export const questions =
{   
    zero: {
        title: "¿Para que hacemos esta encuesta?",
        content: [
            "Con esta encuesta queremos saber los intereses de las personas con respecto a la compra de servicios de páginas web, cuales son los precios que estarían dispuestos a pagar, que tipo de página necesitan y más.",
            "Esto con el objetivo de analizar las respuestas y ofrecer un servicio acorde a las necesidades de los clientes, ya que en muchas ocasiones el precio es muy elevado o hay otros factores que nos gustaría conocer, del porque las personas o empresas no tienen una página web."
        ],
        type: "text",
        next: {
            disabled: false,
            index: 'one'
        },
        back: {
            disabled: true,
            //index: 'one'
        },
        name: 'zero',
        reply: ''
    },
    one: {
        title: "¿Tienes empresa o negocio?",
        content: [
            "Si",
            "Soy empleado",
            "Soy programador",
            "Ninguna"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["two", "two", "twentyfive", "two"]
        },
        back: {
            disabled: false,
            index: 'zero'
        },
        name: 'one'
    },
    two: {
        title: "¿Usted tiene página web?",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: 'two'
        },
        back: {
            disabled: false,
            index: 'one'
        },
        name: 'two'
    },
    twentyfive: {
        title: "Soy veinticinco :v",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: 'two'
        },
        back: {
            disabled: false,
            index: 'one'
        },
        name: 'two'
    }
}

export default ({ children }) =>{
    const [state,setState] = useState(questions.zero);
    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export function BtnProvider({children}) {
    const [state,setState] = useState({next: true, back: true});
    return (            
            <BtnContext.Provider value={[state,setState]}>
                {children}
            </BtnContext.Provider>
    );
}

export const AppContext = createContext(questions.zero);
export const BtnContext = createContext({next: true, back: true});