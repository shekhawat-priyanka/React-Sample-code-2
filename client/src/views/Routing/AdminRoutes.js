import Dashboard from "views/Admin/Dashboard";

import CreateEmailTemplate from "views/Admin/EmailTemplate/CreateEmailTemplate";
import EmailTemplateList from "views/Admin/EmailTemplate/EmailTemplateList";
import EditEmailTemplate from "views/Admin/EmailTemplate/EditEmailTemplate";

const AdminRoutes = [
  { path: "/admin", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/admin/email-templates",
    exact: true,
    name: "Email Template List",
    component: EmailTemplateList,
  },
  {
    path: "/admin/email-templates/create",
    exact: true,
    name: "Create Email Template",
    component: CreateEmailTemplate,
  },
  {
    path: "/admin/email-templates/:emailTemplate_id",
    name: "Edit Email Template",
    component: EditEmailTemplate,
  },
];

export default AdminRoutes;
