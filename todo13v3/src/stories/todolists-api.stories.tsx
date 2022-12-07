import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {api} from "../dal/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        api.getTodolists()
            .then(response => {
                setState(response.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'my 9-th todolist'
    useEffect(() => {
        api.createTodolists(title)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        api.deleteTodolists('b1df5d2d-64d1-43db-b144-c60a4ff3cefd')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '58d6ac1f-c934-4f1d-a5b1-5245203d8906'

    useEffect(() => {
        api.updateTodolists(todolistId, 'new title')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasksOfTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        api.getTasksOfTodolist('3a3d4857-e136-486c-bd86-53d8beb26399')
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const CreateTaskOfTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        api.createTaskOfTodolist('3a3d4857-e136-486c-bd86-53d8beb26399', 'newer task')
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const RenameTaskOfTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        api.renameTaskOfTodolist('3a3d4857-e136-486c-bd86-53d8beb26399', 'bf448d91-216c-48a3-bdb0-d1c1e2e0e63c', '123456')
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTaskOfTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        api.deleteTaskOfTodolist('3a3d4857-e136-486c-bd86-53d8beb26399', 'bf448d91-216c-48a3-bdb0-d1c1e2e0e63c')
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}