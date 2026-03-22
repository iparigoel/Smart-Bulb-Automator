import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {turnOnBulb, turnOffBulb, changeColor} from './service.js';

const server = new McpServer({
    name: "Philips Smart Bulb",
    version: "1.0.0",
});

server.registerTool(
    "turn-on-bulb",
    {
        description: "Turns the bulb on",
    },
    async() => {
        await turnOnBulb();
        return {content: [{type: 'text', text: 'Bulb has been turned on'}]};
    }
);

server.registerTool(
    "turn-off-bulb",
    {
        description: "Turns the bulb off",
    },
    async() => {
        await turnOffBulb();
        return {content: [{type: 'text', text: 'Bulb has been turned off'}]};
    }
);

server.registerTool(
    "change-color-of-bulb",
    {
        description: "Changes the color of bulb",
        inputSchema:{            
            r: z.number().describe('Red Color of the light 0-255'),
            g: z.number().describe('Green Color of the light 0-255'),
            b: z.number().describe('Bulb Color of the light 0-255'),
            dimming: z.number().describe('Dimming of light where 0 means no light, 100 means full and 50 means 50% of brightness'),
        }
    },
    async({r, g, b, dimming}) => {
        await changeColor({r, g, b, dimming});
        return {content: [{type: 'text', text: 'Bulb has been turned on'}]};
    }
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Philips bub MCP Server running on stdio");
}

main();