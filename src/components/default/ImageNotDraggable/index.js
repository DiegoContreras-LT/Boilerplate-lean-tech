import React  from 'react'
import {Image} from './styles'

export const ImageNotDraggable = (props) => {

    return(
        <Image 
        src={props.src} 
        alt={props.alt}
        draggable={false}
        {...props}
        />
    )
}