import React from 'react'
import Nature from './Nature'
import Author from './Author'

export default function Temples(props) {
  return (
    <div className='content-article'>
        <Nature nature={props.nature}> </Nature>
        <h1 className='text-3xl'>{props.title}</h1>
        <Author Date={props.Date} ></Author>
        <img src={props.image}></img>
        <p>
        India is Home to millions of temples which are the places of worship and also the source of economy in the ancient times and some what in modern India also. If we look the architecture of these temples we will find a great similarity between them that helps us to categorise them into three main categories, let’s discuss them in detail…

Nagar Architecture : 
The temples of this kind of architecture are mainly found in North India.
This architecture school was developed in 5th century during Gupta Empire.
The temple is located on stone platform with steps leading to it.
They are comprises of following
Garbhagriha: it is the most sacred place of temple where the main deities are located.
Shikhara: it is the mountain like structure shikara is located on the top of garbhagriha and it is tallest compared to other spire of the temples
Mandapa: It is a portico for the worshipers and the vahan of the lord is situated in it.
Amalak: it is located at the top of Shikha and holds the kalash.
Kalash: it symbolises the divine presence and is frequently used to sanctify the temple space.
Further, unlike south India it does not usually have elaborate boundary walls.
There can be many subdivisions of nagara style temples based on the type of shikara
Latina or rekha-prasada : it is square base at the bottom and whose walls curve or slope inward to a point top of the shikara. Mostly used for Garbhagriha.
Phamsana: this is another type in which roofs are composed of various slabs which gradually decrease in size till the top. Mostly used for Mandapa
Valabhi: It has rectangular base and the roof rises into vaulted chambers.
Dravid Architecture:
This is south Indian style of temple architecture
This school of architecture was developed in 7th century and further developed in 8th century.
Unlike Nagar style dravidian style temples are not built on raised platform.
They also have four sided boundary.
The temple comprises of following:
Gopuram: it is the entrance gate for the temple located on middle of all four walls.
Vimana: it is the main tower located on garbagriha.
Shikhra: Shikha in dravidian temples is the crowning element at the top of the viman.
Mandapa: similar to Nagar style temples dravidian temples also have mondapa for the worshipers.
The dravidian architecture make many advancements in many dynasties
Pallava Architecture: 
Pallava dynasty ruled the region of south India from 2nd century onwards and they laid the foundation of Dravidian architecture.
Although they were Shaivite but Vaishnava monuments were also found in their period
The seventh ruler of Pallava dynasty, Narasimhavarman I, also known as Mamalla, sponsor many buildings and hence most buildings in Mahabalipuram (also called as Mamallapuram in his honour) are attributed to him.
Vijayanagara Architecture:
Vijayanagar empire is one of the greatest empire of India.
Many dravidian architecture monuments found their roots in the time of Vijayanagar empire.
It was founded in 1336AD.
Hampi the capital of Vijayanagar Empire hosts many Dravidian buildings. 

        </p>
    </div>
  )
}
