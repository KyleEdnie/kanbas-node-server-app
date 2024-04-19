import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModulesByCourse(cid)
    res.send(modules);
  });
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    const status = await dao.updateModule(mid, module);
    res.sendStatus(status);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    newModule = await dao.createModule(newModule);
    res.send(newModule);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.sendStatus(status);
  });
}
export default ModuleRoutes;