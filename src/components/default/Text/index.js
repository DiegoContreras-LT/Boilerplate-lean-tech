import React from 'react'
import {Paragraph} from './styles'
import {ArrayString} from './../../../utils/keys'

export const Text = (props) => {

    ArrayString(props.contentKey, props.content, props.avoid)
    
    return (
       <Paragraph 
       title={props.title ? props.title : props.Text} 
       {...props}>
           {props.content}
       </Paragraph>
    )
}
