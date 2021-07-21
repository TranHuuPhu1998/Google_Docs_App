import dynamic from 'next/dynamic';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { useRouter } from 'next/dist/client/router'
import { db } from '../firebase'
import { convertFromRaw , convertToRaw } from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSession } from 'next-auth/client';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor),{
    ssr:false
})

const TextEditor = () => {
    const [session] = useSession();
    const [editorState,setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter();
    const {id} = router.query;

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)

          db.collection('userDocs')
            .doc(session.user.email)
            .collection('docs')
            .doc(id).set({
                editorState: convertToRaw(editorState.getCurrentContent())
            },{
                marge:true
            })
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen pd-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex sticky top-0 z-50 mx-auto max-w-5xl"
                editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
            />;
        </div>
    )
}

export default TextEditor
