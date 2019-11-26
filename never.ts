import * as fs from "fs";

function raise(msg: string): never {

    console.error(`Error "${msg}" raised at ${new Date()}`)
    throw new Error(msg)
}

function readConfig(configFile: string): string {
    if (!fs.existsSync(configFile))
      raise(`Configuration file ${configFile} missing.`)
    return fs.readFileSync(configFile, "utf-8")
}

readConfig("./help.env")