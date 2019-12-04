import React from 'react'
import { Wrapper } from './../elements/Wrapper'

export default function Add() {
    return (
        <Wrapper vertical>
            <form>
                <input placeholder="Enter task" />
                <button>Add Task</button>
            </form>
        </Wrapper>
    )
}