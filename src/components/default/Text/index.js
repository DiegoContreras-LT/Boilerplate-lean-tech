import React from 'react'
import {Paragraph} from './styles'
import {ArrayString} from './../../../utils/keys'
import {withChangeTheme} from './../../../HOC/withChangeTheme'

export const TextComponent = (props) => {

    ArrayString(props.contentKey, props.content, props.avoid)

    return (
       <Paragraph 
       title={props.title ? props.title : props.content} 
       {...props}>
           {props.content}
       </Paragraph>
    )
}

export const Text = withChangeTheme(TextComponent)
