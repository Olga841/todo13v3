import axios from 'axios'
import {CreateTaskOfTodolist} from "../stories/todolists-api.stories";
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY' : 'cf66b916-fda5-47ac-9f68-3fafeff56e6d'
    }
}
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.1/`,
    ...settings
})

type ResponceType<D> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0 | 1
}
type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type CreateTodolistResponceType = {
    data: {
        item: TodolistType
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0 | 1
}
type DeleteUpdateTodolistResponceType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: 0 | 1
}

export const api = {
    getTodolists() {
       return instance.get<Array<TodolistType>>(`todo-lists`)

    },
    createTodolists(title: string) {
        return instance.post<ResponceType<{ item: TodolistType }>>(`todo-lists`, {title})
    },
    deleteTodolists(todolistId: string) {
        return instance.delete<ResponceType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodolists(todolistId: string, title: string) {
        return instance.put<ResponceType<{}>>(`todo-lists/${todolistId}`, {title})
    },
    getTasksOfTodolist(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    },
    createTaskOfTodolist(todolistId: string, title: string) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title: title})
    },
    renameTaskOfTodolist(todolistId: string, taskId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTaskOfTodolist(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
}