import { Education } from "./Education"
import { Experience } from "./Experience"
import { Project } from "./Project"

export type Contents = {
    education: Education[]
    experience: Experience[]
    projects: Project[]
}