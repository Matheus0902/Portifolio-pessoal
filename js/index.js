import { Router } from "./router.js";

const router = new Router()

router.add("/", "../pages/home.html")
router.add("/contact", "../pages/contact.html")
router.add("/projects", "../pages/projects.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()