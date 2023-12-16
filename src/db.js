import fs from "node:fs/promises"
import { URL } from "node:url"

const DB_PATH= new URL('../db.json',import.meta.url).pathname

export const getDB= async () => {
    const db= await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(db)
}

export const saveDB= async () => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const insert= async (note) => {
	const db= await getDB()
	db.notes.push(note)
	await saveDB(db)
	return note
}