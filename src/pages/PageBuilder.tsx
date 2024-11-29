import grapesjs, {Editor} from 'grapesjs';
import GjsEditor from '@grapesjs/react';
import GjsPresetWebpage from 'grapesjs-preset-webpage';
import GjsPresetNewsletter from 'grapesjs-preset-newsletter';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { template1, template2 } from '@/constants';

const templatesMap = {
  'template2': template1,
  'template1': template2
}

const PageBuilder = () => {
  const [editor, setEditor] = useState<Editor>();
  const queryParams = useMemo(()=>new URLSearchParams(window.location.search), []);

  const onEditor = (editor: Editor) => {
    setEditor(editor);
  }

  // const handleExport = () => {
  //   if (editor) {
  //     const html = editor.getHtml(); // Get HTML content
  //     const css = editor.getCss(); // Get CSS content
  //     const json = editor.getProjectData(); // Get CSS content
  //     console.log('HTML code:', html);
  //     console.log('CSS code:', css);
  //     console.log('JSON data:', json);
  //   }
  // }

  const handleImport = useCallback((template: object) => {
    if(editor) {
      editor.loadProjectData(template);
    }
  }, [editor]);

  useEffect(() => {

    const preloadTemplate = queryParams.get('template');
    if(preloadTemplate) {
        handleImport(templatesMap[preloadTemplate]);
    }
  }, [editor, queryParams, handleImport]);

  return <>
        {/* <Button onClick={handleExport}> Export</Button>
        <Button onClick={handleImport}> Import</Button> */}

        <GjsEditor
      // Pass the core GrapesJS library to the wrapper (required).
      // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
      grapesjs={grapesjs}
      // Load the GrapesJS CSS file asynchronously from URL.
      // This is an optional prop, you can always import the CSS directly in your JS if you wish.
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      // GrapesJS init options
      options={{
        height: '100vh',
        storageManager: false,
        plugins: [GjsPresetWebpage, GjsPresetNewsletter], // Load the webpage preset plugin
        pluginsOpts: {
        GjsPresetWebpage: {}, // Add plugin-specific options if needed
        GjsPresetNewsletter: {}, // Add plugin-specific options if needed
      },
      }}
      onEditor={onEditor}
    />
  </>;
};

export default PageBuilder;




