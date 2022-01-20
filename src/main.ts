#!/usr/bin/env node

import fs from "fs"
import { hideBin } from "yargs/helpers"
import yargs from "yargs/yargs"

yargs(hideBin(process.argv))
    .scriptName("renamer")
    .usage("$0 <cmd> [args]")
    .example([
        ['$0 run --match "Season \\d Episode \\d .+" --replace "TV Show - S{1}E{2} - {3}"', ""],
        [
            '$0 run --recursive --match "Season \\d Episode \\d .+" --replace "TV Show - S{1}E{2} - {3}"',
            "Rename files in subfolders",
        ],
    ])
    .command(
        "run [--recursive] <regex> <output>",
        "Rename files in bulk",
        {
            recursive: {
                type: "boolean",
                describe: "Rename files in sub folders?",
            },
            match: {
                type: "string",
                describe: "Match file names",
                demandOption: true,
            },
            replace: {
                type: "string",
                describe: "The file's new name",
            },
        },
        (argv) => {
            const { recursive, match, replace } = argv

            if (!recursive) {
                const files = fs.readdirSync(process.cwd())
                console.debug(files)
            }

            // const getFiles = (path: string) => {
            //     const files = fs.readdirSync(path)

            //     for ()
            // }
        },
    )
    .demandOption(["match", "replace"])
    .parse()
