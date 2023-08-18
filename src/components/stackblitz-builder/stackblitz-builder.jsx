import React, {useEffect} from "react";
import sdk from "@stackblitz/sdk";
import angularJson from "./angular.json";
import packageJson from "./package.json";
import tsconfigJson from "./tsconfig.json";
import indexHtml from "!raw-loader!./src/index.html";
import main from "!raw-loader!./src/main.ts";
import globalStyles from "!raw-loader!./src/global_styles.css";
import tsconfigAppJson from "./src/tsconfig.app.json";

export function StackBlitzBuilder() {
    useEffect(async () => {
        await sdk.embedProject(
            'embed',
            {
                title: 'Node Starter',
                description: 'A basic Node.js project',
                template: 'angular-cli',
                dependencies: {
                    "rxjs": "7.8.1",
                    "tslib": "2.6.1",
                    "zone.js": "0.13.1",
                    "@angular/core": "16.2.0",
                    "@angular/forms": "16.2.0",
                    "@types/jasmine": "4.0.3",
                    "@angular/common": "16.2.0",
                    "@angular/router": "16.2.0",
                    "@angular/compiler": "16.2.0",
                    "@angular/animations": "16.2.0",
                    "@angular/platform-browser": "16.2.0",
                    "@angular/platform-browser-dynamic": "16.2.0"
                },
                files: {
                    'package.json': `${JSON.stringify(packageJson)}`,
                    'angular.json': `${JSON.stringify(angularJson)}`,
                    'tsconfig.json': `${JSON.stringify(tsconfigJson)}`,
                    'src/index.html': `${indexHtml}`,
                    'src/main.ts': `${main}`,
                    'src/global_styles.css': `${globalStyles}`,
                    'src/tsconfig.app.json': `${JSON.stringify(tsconfigAppJson)}`,
                },
            },
            {
                clickToLoad: true,
                openFile: 'main.ts',
            },
        );

    }, []);
    return (
        <div style={{height: "500px"}}>
            <iframe height={500} id="embed"></iframe>
        </div>
    );
}
