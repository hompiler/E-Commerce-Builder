import { CompleterResult } from "readline";
import { Request } from "express";
import { log } from "console";
export class ApiFeatures {


    constructor(public req: Request) { }

    filter() {
        const { sort, fields, page, limit, ...rest } = this.req.query;
        const newObject = Object.keys(rest).reduce((prevoius : any, key) => {
            if (key.includes('-')) {
                const [parent, child] = key.split('-')
                return {
                    ...prevoius, [parent]: {
                        ...(prevoius[parent]??{}),
                        [child]: isNaN(+rest[key]) ? rest[key] : +rest[key]
                    }
                }
            }
            else
                return {
                    ...prevoius, main: {
                        ...prevoius.main,
                        [key]: isNaN(+rest[key]) ? rest[key] : +rest[key]
                    }
                }
        }, { main: {}, })
        console.log(newObject);
        
        return newObject;
    }

    sort() {
        let sortStr: string = this.req.query.sort?.toString();
        let ascOrDec;
        if (sortStr) {
            if (sortStr.startsWith('-')) {
                sortStr = sortStr.substring(1)
                ascOrDec = 'desc';
            }
            else
                ascOrDec = 'asc';
        }
        const sortObj = [{
            [sortStr]: ascOrDec
        }]
        console.log(sortObj);

        return sortObj;
    }

    fields() {
        const fieldsStr = this.req.query.fields?.toString();
        if (fieldsStr) {
            const newStr = fieldsStr.split(',').map((el: string) => {
                return {
                    [el]: true
                }
            });
            const newfieldsObj = Object.assign({}, ...newStr);
            return newfieldsObj;
        }
    }

    pagination() {

        const page = +this.req.query.page || 1;
        const limit = +this.req.query.limit || 10;
        const skip = (page - 1) * limit;
        const paginationObj = {
            skip: skip,
            take: limit
        }
        console.log(paginationObj);

        return paginationObj;
    }

    all() {

        const queryObj: any = {}
        const {main,...rest}=this.filter();
        console.log(rest);
        
        queryObj['where'] =  main

        if (this.req.query.fields) {
            queryObj['select'] = this.fields()
        }
        if (this.req.query.sort) {
            queryObj['orderBy'] = this.sort()
        }
        if (this.req.query.page) {
            queryObj['skip'] = this.pagination().skip
        }
        if (this.req.query.limit) {
            queryObj['take'] = this.pagination().take
        }
        console.log(queryObj);

        return queryObj;
    }
}

