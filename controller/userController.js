import { userList } from "../model/userModel.js";

export function handelUser(req, resp){

    const userData = userList();
    console.log(userData);
    resp.render('user', {users:userData});
}