export const userContoller=(req,res)=>{
    const name=req.params.uname;
    res.send(`Hello ${name}`)
}

export const searchController=(req,res)=>{
    const keyword=req.query.keyword;
    const id=req.query.id;
    res.send(`Searching for ${keyword} and ${id}`);
}

export const postUserController=(req,res)=>{
    console.log(req.headers);
    console.log(req.body);
    console.log(req.method);
    console.log(req.url);
    // res.send(`User Created`+JSON.stringify(req.body))
    res.json({
        code:"201",
        data:req.body
    })
}