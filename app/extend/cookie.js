/**
 * Created by ASSOON on 2017/2/15.
 */



export default class Cookie{
    constructor() {
        this.get = name => {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        };

        this.set = (name, value) => {
            let exp = new Date();
            exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + escape(value) + ";" +
                "expires =" + exp.toGMTString();

            return '设置成功cookie';
        };

        this.delet = name => {
            let exp = new Date();
            exp.setTime(exp.getTime() - 1);
            let cval = this.set(name);
            if (cval != null)
                document.cookie = name + "=" + '' + ";" +
                    "expires=" + exp.toGMTString();

            return '删除成功';

        }

    }

}