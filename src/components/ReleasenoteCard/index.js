import LinkImage from '@site/src/components/LinkImage.js';
import { useDoc, useDocById } from "@docusaurus/plugin-content-docs/client";

export default function releaseCard() {
    const docTitle = useDocById('release-notes/java/java-2_2_48');
    console.log(docTitle);
    return (
        <a href='release-notes/java'>
            <div class='apm-agent new'>
                <div class='logo'>
                    <LinkImage img='index-icon/product-java-l.svg' desc='java' />
                </div>
                <div class='int'>
                    <p>Java</p>
                    <code>Application</code>
                </div>
            </div>
        </a>
    );
}