import { Alert } from "react-native";
import { api } from "./api";


async function status() {
    try {
        const { data } = await api.get(`/status`)

        return data
    } catch (error) {
        throw error
    }
}

async function checkForUpdates() {
    try {
        const { data } = await api.get(`/development-version-list`)

        return data
    } catch (error) {
        throw error
    }
}

async function updateDevDevice(id) {
    try {
        const { data } = await api.get(`/development-version/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

async function updateTraceDevice(data) {
    try {
        // console.log(data)
        const resposta = await api.post(`/trace/data`, data)
        return resposta
    } catch (error) {
        throw error
    }
}

export const serverRoutes = {
    status,
    checkForUpdates,
    updateDevDevice,
    updateTraceDevice
}   