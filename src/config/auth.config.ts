import {betterAuth} from "better-auth"
import {typeorAdapter, getEntities} from "better-auth-typeorm-adapter"
import { DataSource } from "typeorm"

export constr AppDataSource = new DataSource({})