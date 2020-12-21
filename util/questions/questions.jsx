import React,{createContext,useState} from 'react';

export const questions =
{
    zero: {
        title: "¿Para qué hacemos esta encuesta?",
        content: [
            "Con esta encuesta queremos saber los intereses de las personas con respecto a la compra de servicios de páginas web, cuáles son los precios que estarían dispuestos a pagar, que tipo de página necesitan y más.",
            "Esto con el objetivo de analizar las respuestas y ofrecer un servicio acorde a las necesidades de los clientes, ya que en muchas ocasiones el precio es muy elevado o hay otros factores que nos gustaría conocer, del porqué las personas o empresas no tienen una página web"
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
            menu: ["two", "two", "nineteen", "two"]
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
            index: 'three',
            menu: ["three", "twelve"]
        },
        back: {
            disabled: false,
            index: 'one'
        },
        name: 'two'
    },
    three: {
        title: "¿Cuánto le costó la página web?",
        type: "number",
        next: {
            disabled: true,
            index: "four"
        },
        back: {
            disabled: false,
            index: 'two'
        },
        name: 'three'
    },
    four: {
        title: "¿Cuánto le cuestan los servicios para mantenerlo en internet?",
        type: "number",
        next: {
            disabled: true,
            index: "five"
        },
        back: {
            disabled: false,
            index: 'three'
        },
        name: 'four'
    },
    five: {
        title: "¿Estos servicios los paga de manera mensual o anual?",
        content: [
            "Mensual",
            "Anual",
            "Otro"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["six", "six", "six"]
        },
        back: {
            disabled: false,
            index: 'four'
        },
        name: 'five'
    },
    six: {
        title: "¿Todavía usa la página web?",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["eight", "seven"]
        },
        back: {
            disabled: false,
            index: 'five'
        },
        name: 'six'
    },
    seven: {
        title: "¿Por qué motivo lo dejó de usar?",
        type: "textarea",
        next: {
            disabled: true,
            index: "eight"
        },
        back: {
            disabled: false,
            index: 'six'
        },
        name: 'seven'
    },
    eight:{
        title: "¿Cuáles fueron las circunstancias que lo llevaron a pensar que necesitaba una página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "nine"
        },
        back: {
            disabled: false,
            index: 'six'
        },
        name: 'eight'
    },//
    nine:{
        title: "¿Cómo empezó a buscar a una persona o empresa que le hiciera la página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "ten"
        },
        back: {
            disabled: false,
            index: 'eight'
        },
        name: 'nine'
    },//
    ten:{
        title: "¿Cuáles fueron las razones que lo llevaron a escoger el servicio actual?",
        type: "textarea",
        next: {
            disabled: true,
            index: "eleven"
        },
        back: {
            disabled: false,
            index: 'nine'
        },
        name: 'ten'
    },//¿Cuál es el uso que le das actualmente a la página web?
    eleven:{
        title: "¿Cuál es el uso que le das actualmente a la página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "finish"
        },
        back: {
            disabled: false,
            index: 'ten'
        },
        name: 'eleven'
    },
    twelve:{
        title: "¿A usted le gustaría tener una página web?",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "thriteen",
            menu: ["twelveyes", "twelveno"]
        },
        back: {
            disabled: false,
            index: 'two'
        },
        name: 'twelve'
    },
    twelveyes:{
        title: "¿Por qué considera necesario tener una página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "thriteen"
        },
        back: {
            disabled: false,
            index: 'twelve'
        },
        name: 'twelveyes'
    },
    twelveno:{
        title: "¿Por qué considera que no necesita tener una página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "finish"
        },
        back: {
            disabled: false,
            index: 'twelve'
        },
        name: 'twelveno'
    },
    thriteen:{
        title: "¿Cuánto invertiría usted en una página web?",
        type: "number",
        next: {
            disabled: true,
            index: "fourteen"
        },
        back: {
            disabled: false,
            index: 'twelveyes'
        },
        name: 'thriteen'
    },
    fourteen:{
        title: "¿Cómo le gustaría el periodo de pago?",
        content: [
            "Mensual",
            "Anual",
            "Otro"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["fiveteen", "fiveteen", "fiveteen"]
        },
        back: {
            disabled: false,
            index: 'thriteen'
        },
        name: 'fourteen'
    },//A buscado personas o empresas que ofrezcan estos mismos servicios?
    fiveteen:{
        title: "¿Ha buscado personas o empresas que ofrezcan estos mismos servicios?",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["sixteen", "seventeen"]
        },
        back: {
            disabled: false,
            index: 'fourteen'
        },
        name: 'fiveteen'
    },//Porque no ha adquirido ninguno de sus servicios?
    sixteen:{
        title: "¿Por qué no ha adquirido ninguno de sus servicios?",
        type: "textarea",
        next: {
            disabled: true,
            index: "seventeen"
        },
        back: {
            disabled: false,
            index: 'fiveteen'
        },
        name: 'sixteen'
    },//¿Qué tipo de página web quiere tener?
    seventeen:{
        title: "¿Qué tipo de página web quiere tener?",
        content: [
            "Blog",
            "Tienda Online",
            "Web Corporativa",
            "Foro",
            "Sitio de Descargas",
            "Sitio de Noticias",
            "Sitio de Videos",
            "Sitio Eduvativo"
        ],
        type: "checkbox",
        next: {
            disabled: true,
            index: "eighteen"
        },
        back: {
            disabled: false,
            index: 'fiveteen'
        },
        name: 'seventeen'
    },//¿Cuál es el uso que le dará a la página web?
    eighteen:{
        title: "¿Cuál es el uso que le dará a la página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "finish"
        },
        back: {
            disabled: false,
            index: 'seventeen'
        },
        name: 'eighteen'
    },//Alguna vez has brindado servicios de alojamiento o creación de páginas web?
    nineteen:{
        title: "¿Alguna vez has brindado servicios de alojamiento o creación de páginas web?",
        content: [
            "Si",
            "No"
        ],
        type: "radio",
        next: {
            disabled: true,
            index: "",
            menu: ["twenty", "twentyfour"]
        },
        back: {
            disabled: false,
            index: 'one'
        },
        name: 'nineteen'
    },//¿Cuánto te cuestan los servicios de alojamiento por cada sitio web?
    twenty:{
        title: "¿Cuánto te cuestan los servicios de alojamiento por cada sitio web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "twentyone"
        },
        back: {
            disabled: false,
            index: 'nineteen'
        },
        name: 'twenty'
    },//¿Cuánto cobras por hacer una página web?
    twentyone:{
        title: "¿Cuánto cobras por hacer una página web?",
        type: "textarea",
        next: {
            disabled: true,
            index: "twentytwo"
        },
        back: {
            disabled: false,
            index: 'twenty'
        },
        name: 'twentyone'
    },//¿Qué tecnologías utilizas para crearla?
    twentytwo:{
        title: "¿Qué tecnologías utilizas para crearla?",
        type: "textarea",
        next: {
            disabled: true,
            index: "twentythree"
        },
        back: {
            disabled: false,
            index: 'twentyone'
        },
        name: 'twentytwo'
    },//Si encontraras un servicio de alojamiento más barato, ¿lo utilizarías? y porque.
    twentythree:{
        title: "Si encontraras un servicio de alojamiento más económico, ¿lo utilizarías? y porque.?",
        type: "textarea",
        next: {
            disabled: true,
            index: "finish"
        },
        back: {
            disabled: false,
            index: 'twentytwo'
        },
        name: 'twentythree'
    },//¿Que tipo de servicios te gustaría contratar?
    twentyfour:{
        title: "¿En qué tipo de servicios está interesado?",
        type: "textarea",
        next: {
            disabled: true,
            index: "twentyfive"
        },
        back: {
            disabled: false,
            index: 'nineteen'
        },
        name: 'twentyfour'
    },//
    twentyfive:{
        title: "¿Cuánto estarías dispuesto a pagar por estos servicios?",
        type: "textarea",
        next: {
            disabled: true,
            index: "finish"
        },
        back: {
            disabled: false,
            index: 'twentyfour'
        },
        name: 'twentyfive'
    },
    finish: {
        title: "Nos gustaría que proporcione alguna forma de contacto (correo electrónico, número de teléfono, redes sociales y/o algún otro medio) para que poder comunicarnos con usted en caso de querer hacerle otra encuesta u ofrecer algún producto o servicio de este ámbito.",
        type: "textarea",
        next: {
            disabled: false,
            index: 'finish2'
        },
        back: {
            disabled: true,
            //index: 'one'
        },
        name: 'finish',
        reply: ''
    },
    finish2: {
        title: "Agradecemos mucho tu tiempo en esta encuesta, las respuestas las utilizaremos para brindar servicios de este ámbito pero teniendo en cuenta las necesidades y el bolsillo de ustedes. ¡¡Muchas Gracias!!",
        type: "finish",
        next: {
            disabled: true,
            index: 'one'
        },
        back: {
            disabled: true,
            //index: 'one'
        },
        name: 'finish2',
        reply: ''
    },
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
