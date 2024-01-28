let weburl = new URL("./web.png",import.meta.url).href
let creatorurl = new URL("./creator.png",import.meta.url).href
let mobileurl = new URL("./mobile.png",import.meta.url).href
let backendurl = new URL("./backend.png",import.meta.url).href
let krotos = new URL("./kratos_mirror.png",import.meta.url).href
let humanImage = new URL("./hero_bg_human.png",import.meta.url).href
let controllerNoBG = new URL("./controller_no_bg.png",import.meta.url).href
let arrowPointingLeft = new URL("./arrow_pointing_left_no_bg.png",import.meta.url).href

const IMAGES = [
    weburl,creatorurl,mobileurl,backendurl,krotos,humanImage,controllerNoBG,arrowPointingLeft
]

export default IMAGES