import { Task } from '@serenity-js/core';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const HomePageAction = {
    called: (name: string) =>
        Task.where(`#actor clicked the text ${ name }`,
            //  Click.on(Examples.called(name)),
        ),

    clicked_SingIn: ()=>{
        
    }    
}
