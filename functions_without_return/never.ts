import * as fs from "fs";

// never meant to return!
function raise(msg: string): never {

    console.error(`Error "${msg}" raised at ${new Date()}`)
    throw new Error(msg)
}

// if a config file is not found, we want to log
// and throw an error.
function readConfig(configFile: string): string {
    if (!fs.existsSync(configFile))
      raise(`Configuration file ${configFile} missing.`)
    return fs.readFileSync(configFile, "utf-8")
}

readConfig("./help.env")

/*
 
 An empty type is a type that cannot have any value. No instance
 can ever be created.

 An empty type is used to denote impossibility. 

 Most languages use void but that can be missleading. 'Void' actually
 returns although with no value. The 'raise' function doesn't even 
 return.

 */