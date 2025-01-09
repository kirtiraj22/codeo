import { LANGUAGE_CONFIG } from "@/app/(root)/_constants"
import { CodeEditorState } from "@/types"
import { Monaco } from "@monaco-editor/react"
import { create } from "zustand"

const getInitialState = () => {
    // if we are on the server 
    if(typeof window === "undefined"){
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark"
        }
    }

    // if we are on the client
    const savedLanguage = localStorage.getItem("editor-language") || "javascript"
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || 16;

    return {
        language: savedLanguage,
        theme: savedTheme,
        fontSize: Number(savedFontSize)
    }
}

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
    const initialState = getInitialState();
    
    return{
        ...initialState,
        output: "",
        isRunning: false,
        error: null,
        editor: null,
        executionResult: null,

        getCode: () => get().editor?.getValue() || "",

        setEditor: (editor: Monaco) => {
            const savedCode = localStorage.getItem(`editor-code-${get().language}`);
            if(savedCode){
                editor.setValue(savedCode)
            }

            set({ editor });
        },

        setTheme: (theme: string) => {
            localStorage.setItem("editor-theme", theme);
            set({ theme })
        },

        setFontSize: (fontSize: number) => {
            localStorage.setItem("editor-font-size", fontSize.toString());
            set({ fontSize })
        },

        setLanguage: (language: string) => {
            const currentCode = get().editor?.getValue();
            if(currentCode){
                localStorage.setItem(`editor-code-${get().language}`, currentCode)
            }

            localStorage.setItem("editor-language", language);

            set({
                language,
                output: "",
                error: null
            })
        },

        runCode: async () => {
            console.log("Run code!")
            const { language, getCode } = get();
            const code = getCode();
            if(!code){
                set({
                    error: "Please enter some code!"
                })
                return;
            }

            set({ isRunning: true, error: null, output: ""})

            try{
                const runtime = LANGUAGE_CONFIG[language].pistonRuntime
                // call piston api
                const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        language: runtime.language,
                        version: runtime.version,
                        files: [{ content: code }]
                    })
                })

                const data = await response.json();
                console.log("Data from piston : ", data);
                console.log("message: ", data.message)
                // if error in api
                if(data.message){
                    set({
                        error: data.message,
                        executionResult: {
                            code,
                            output: "",
                            error: data.message
                        }
                    })

                    return;
                }

                

            }catch(err){
                console.log("err",err)
            }finally{
                set({
                    isRunning: false
                })
            }
        }
    }
})