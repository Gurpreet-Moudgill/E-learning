const express = require("express")
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb")
// const request = require("request")

const tempelatePath = path.join(__dirname, "../tempelates/beginner-tutorial-website");
app.use(express.static(path.join(__dirname, "../public")))

app.use(express.json())

const tempPath = path.join(__dirname, "../tempelates/beginner-tutorial-website/angularjs")
app.set("view engine", "hbs")
app.set("views", tempelatePath)

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => { res.render("login") })

app.get("/signup", (req, res) => { res.render("signup") })

app.post("/signup", async (req, res) => {
    const data = {
        email:req.body.email,
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render("index")
})

app.post("/login", async (req, res) => {

    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.render("index")

        }
        else {
            res.send("wrong password")
        }
    }
    catch {
        res.send("wrong details")
    }


})

app.get("/logout", (req, res) => {
    res.render("login");
})

app.get("/index", (req, res) => {
    res.render("index");
})
// Angular ........................
app.get("/angular", (req, res) => {
    res.render("angular");
})
app.get("/angular_intro", (req, res) => {
    res.render("angular_intro");
})
app.get("/angular_directives", (req, res) => {
    res.render("angular_directives");
})
app.get("/angular_expressions", (req, res) => {
    res.render("angular_expressions");
})
app.get("/angular_filters", (req, res) => {
    res.render("angular_filters");
})
app.get("/angular_modules", (req, res) => {
    res.render("angular_modules");
})
app.get("/angular_services", (req, res) => {
    res.render("angular_services");
})
app.get("/angular_tables", (req, res) => {
    res.render("angular_tables");
})
app.get("/angular_validation", (req, res) => {
    res.render("angular_validation");
})
app.get("/angular_scopes", (req, res) => {
    res.render("angular_scopes");
})
app.get("/angular_forms", (req, res) => {
    res.render("angular_forms");
})
app.get("/one1", (req, res) => {
    res.render("one1");
})
app.get("/two1", (req, res) => {
    res.render("two1");
})
app.get("/three1", (req, res) => {
    res.render("three1");
})
app.get("/four1", (req, res) => {
    res.render("four1");
})
app.get("/five1", (req, res) => {
    res.render("five1");
})
app.get("/seven1", (req, res) => {
    res.render("seven1");
})
app.get("/eight1", (req, res) => {
    res.render("eight1");
})
app.get("/nine1", (req, res) => {
    res.render("nine1");
})
app.get("/ten1", (req, res) => {
    res.render("ten1");
})
app.get("/eleven1", (req, res) => {
    res.render("eleven1");
})
app.get("/twelve1", (req, res) => {
    res.render("twelve1");
})
app.get("/thirteen1", (req, res) => {
    res.render("thirteen1");
})
app.get("/fourteen1", (req, res) => {
    res.render("fourteen1");
})
app.get("/fifteen1", (req, res) => {
    res.render("fifteen1");
})
app.get("/angular_forms", (req, res) => {
    res.render("angular_forms");
})
app.get("/sixteen1", (req, res) => {
    res.render("sixteen1");
})
app.get("/seventeen1", (req, res) => {
    res.render("seventeen1");
})
app.get("/eighteen1", (req, res) => {
    res.render("eighteen1");
})
app.get("/nineteen1", (req, res) => {
    res.render("nineteen1");
})
app.get("/twenty1", (req, res) => {
    res.render("twenty1");
})
app.get("/twentyone1", (req, res) => {
    res.render("twentyone1");
})
// ................................

// Bootstrap ......................
app.get("/bootstrap", (req, res) => {
    res.render("bootstrap");
})
app.get("/bootstrap_affix", (req, res) => {
    res.render("bootstrap_affix");
})
app.get("/bootstrap_alerts", (req, res) => {
    res.render("bootstrap_alerts");
})
app.get("/bootstrap_buttons", (req, res) => {
    res.render("bootstrap_buttons");
})
app.get("/bootstrap_carousel", (req, res) => {
    res.render("bootstrap_carousel");
})
app.get("/bootstrap_collapse", (req, res) => {
    res.render("bootstrap_collapse");
})
app.get("/bootstrap_dropdowns", (req, res) => {
    res.render("bootstrap_dropdowns");
})
app.get("/bootstrap_forms", (req, res) => {
    res.render("bootstrap_forms");
})
app.get("/bootstrap_grid_system", (req, res) => {
    res.render("bootstrap_grid_system");
})
app.get("/bootstrap_images", (req, res) => {
    res.render("bootstrap_images");
})
app.get("/bootstrap_inputs", (req, res) => {
    res.render("bootstrap_inputs");
})
app.get("/bootstrap_introduction", (req, res) => {
    res.render("bootstrap_introduction");
})
app.get("/bootstrap_labels", (req, res) => {
    res.render("bootstrap_labels");
})
app.get("/bootstrap_list_group", (req, res) => {
    res.render("bootstrap_list_group");
})
app.get("/bootstrap_modal", (req, res) => {
    res.render("bootstrap_modal");
})
app.get("/bootstrap_navbar", (req, res) => {
    res.render("bootstrap_navbar");
})
app.get("/bootstrap_pagination", (req, res) => {
    res.render("bootstrap_pagination");
})
app.get("/bootstrap_panels", (req, res) => {
    res.render("bootstrap_panels");
})
app.get("/bootstrap_popover", (req, res) => {
    res.render("bootstrap_popover");
})
app.get("/bootstrap_progressbar", (req, res) => {
    res.render("bootstrap_progressbar");
})
app.get("/bootstrap_tables", (req, res) => {
    res.render("bootstrap_tables");
})
app.get("/bootstrap_tooltip", (req, res) => {
    res.render("bootstrap_tooltip");
})
app.get("/bootstrap_typography", (req, res) => {
    res.render("bootstrap_typography");
})
app.get("/bootstrap_wells", (req, res) => {
    res.render("bootstrap_wells");
})
app.get("/one2", (req, res) => {
    res.render("one2");
})
app.get("/six1", (req, res) => {
    res.render("six1");
})
app.get("/eight2", (req, res) => {
    res.render("eight2");
})
app.get("/ten2", (req, res) => {
    res.render("ten2");
})
app.get("/nine2", (req, res) => {
    res.render("nine2");
})
app.get("/tweleve2", (req, res) => {
    res.render("tweleve2");
})
app.get("/thirteen2", (req, res) => {
    res.render("thirteen2");
})
app.get("/eighteen2", (req, res) => {
    res.render("eighteen2");
})
app.get("/thirtytwo2", (req, res) => {
    res.render("thirtytwo2");
})
app.get("/fourtyseven2", (req, res) => {
    res.render("fourtyseven2");
})
app.get("/fiftyfive2", (req, res) => {
    res.render("fiftyfive2");
})

// ................................

// News.........................

app.get("/Oracle", (req, res) => {
    res.render("Oracle");
})
app.get("/Micr", (req, res) => {
    res.render("Micr");
})

// ................................

//CSS
app.get("/css", (req, res) => {
    res.render("css");
})
app.get("/css_align", (req, res) => {
    res.render("css_align");
})
app.get("/css_backgrounds", (req, res) => {
    res.render("css_backgrounds");
})
app.get("/css_borders", (req, res) => {
    res.render("css_borders");
})
app.get("/css_box_model", (req, res) => {
    res.render("css_box_model");
})
app.get("/css_display", (req, res) => {
    res.render("css_display");
})
app.get("/css_dropdowns", (req, res) => {
    res.render("css_dropdowns");
})
app.get("/css_float", (req, res) => {
    res.render("css_float");
})
app.get("/css_fonts", (req, res) => {
    res.render("css_fonts");
})
app.get("/css_forms", (req, res) => {
    res.render("css_forms");
})
app.get("/css_height_width", (req, res) => {
    res.render("css_height_width");
})
app.get("/css_image_gallery", (req, res) => {
    res.render("css_immage_gallery");
})
app.get("/css_introduction", (req, res) => {
    res.render("css_introduction");
})
app.get("/css_links", (req, res) => {
    res.render("css_links");
})
app.get("/css_lists", (req, res) => {
    res.render("css_lists");
})
app.get("/css_margins", (req, res) => {
    res.render("css_margins");
})
app.get("/css_outline", (req, res) => {
    res.render("css_outline");
})
app.get("/css_padding", (req, res) => {
    res.render("css_padding");
})
app.get("/css_pseudo_class", (req, res) => {
    res.render("css_pseudo_class");
})
app.get("/css_syntax", (req, res) => {
    res.render("css_syntax");
})
app.get("/css_text", (req, res) => {
    res.render("css_text");
})
app.get("/css_tooltip", (req, res) => {
    res.render("css_tooltip");
})
app.get("/css_ways", (req, res) => {
    res.render("css_ways");
})
app.get("/one_css", (req, res) => {
    res.render("one_css");
})
// .....
// PHP ............................
app.get("/php", (req, res) => {
    res.render("php");
})
app.get("/php1", (req, res) => {
    res.render("php1");
})

// ................................

// code
app.get("/code", (req, res) => {
    res.render("code");
})
app.get("/codeigniter_basics", (req, res) => {
    res.render("codeigniter_basics");
})
app.get("/codeigniter_configuration", (req, res) => {
    res.render("codeigniter_configuration");
})
app.get("/codeigniter_cookie", (req, res) => {
    res.render("codeigniter_cookie");
})
app.get("/codeigniter_database", (req, res) => {
    res.render("codeigniter_database");
})
app.get("/codeigniter_file_uploading", (req, res) => {
    res.render("codeigniter_file_uploading");
})
app.get("/codeigniter_validation", (req, res) => {
    res.render("codeigniter_validation");
})
app.get("/codeigniter_introduction", (req, res) => {
    res.render("codeigniter_introduction");
})
app.get("/codeigniter_libraries", (req, res) => {
    res.render("codeigniter_libraries");
})
app.get("/codeigniter_mvc", (req, res) => {
    res.render("codeigniter_mvc");
})
app.get("/codeigniter_security", (req, res) => {
    res.render("codeigniter_security");
})
app.get("/codeigniter_session", (req, res) => {
    res.render("codeigniter_session");
})
app.get("/codeigniter_form_validation", (req, res) => {
    res.render("codeigniter_form_validation");
})
app.get("/apple", (req, res) => {
    res.render("apple");
})
app.get("/g1", (req, res) => {
    res.render("g1");
})
app.get("/g2", (req, res) => {
    res.render("g2");
})
app.get("/android", (req, res) => {
    res.render("android");
})
app.get("/linux", (req, res) => {
    res.render("linux");
})
//

//HTML

app.get("/html5", (req, res) => {
    res.render("html5");
})
app.get("/html5_application_cache", (req, res) => {
    res.render("html5_application_cache");
})
app.get("/html5_audio", (req, res) => {
    res.render("html5_audio");
})
app.get("/html5_canvas", (req, res) => {
    res.render("html5_canvas");
})
app.get("/html5_drag_drop", (req, res) => {
    res.render("html5_drag_drop");
})
app.get("/html5_media", (req, res) => {
    res.render("html5_media");
})
app.get("/html5_migration", (req, res) => {
    res.render("html5_migration");
})
app.get("/html5_semantics", (req, res) => {
    res.render("html5_semantics");
})
app.get("/html5_serversent_events", (req, res) => {
    res.render("html5_serversent_events");
})
app.get("/html5_svg", (req, res) => {
    res.render("html5_svg");
})
app.get("/html5_video", (req, res) => {
    res.render("html5_video");
})
app.get("/html5_web_workers", (req, res) => {
    res.render("html5_web_workers");
})
app.get("/html5_youtube", (req, res) => {
    res.render("html5_youtube");
})
app.get("/html5_introduction", (req, res) => {
    res.render("html5_introduction");
})
app.get("/html5_elements", (req, res) => {
    res.render("html5_elements");
})
app.get("/html5_geolocation", (req, res) => {
    res.render("html5_geolocation");
})
app.get("/html5_local_storage", (req, res) => {
    res.render("html5_local_storage");
})
app.get("/one_h", (req, res) => {
    res.render("one_h");
})
app.get("/node", (req, res) => {
    res.render("node");
})
app.get("/nodejs_introduction", (req, res) => {
    res.render("nodejs_introduction");
})
//
//javascript
// app.get("/js",(req, res)=>{
//     res.render("js");
// })
// app.get("/javascript_arithmetic",(req, res)=>{
//     res.render("javascript_arithmetic");
// })
// app.get("/javascript_array_methods",(req, res)=>{
//     res.render("javascript_array_methods");
// })
// app.get("/javascript_arrays",(req, res)=>{
//     res.render("javascript_arrays");
// })
//
app.listen(3000, () => {
    console.log("port connected");
})