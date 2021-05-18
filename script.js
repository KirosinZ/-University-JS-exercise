document.body.children['addfolderbutton'].addEventListener("click", this.addFolder);

function getElement(path = [])
{
    let iter = document.body.children[0].children['folder_root'];
    for (let fold of path)
    {
        if (iter == undefined || iter.children.length == 0) return undefined;
        iter = iter.children[0].children['folder_' + fold];
    }
    return iter;
}

function isAvailable(folder, elem)
{
    if (folder.children[0].children.length == 0) return true;
    for (let i = 0; i<folder.children[0].children.length; i++)
    {
        if (folder.children[0].children[i].attributes['name'].value == elem) return false;
    }
    return true;
}

function addFolder(event)
{
    event.preventDefault();

    let path = document.body.children["inbox"].value.split('\\');
    let folderpath = path.splice(0, path.length - 1);

    let folder = getElement(folderpath);
    let elem = path[0];

    if (folder == undefined)
    {
        alert('Указанный путь не существует.');
        return;
    }

    if (!isAvailable(folder, "folder_" + elem))
    {
        alert('Такая папка уже существует.');
        return;
    }

    let text = document.createElement('li');

    let att = document.createAttribute('name');
    att.value = 'folder_' + elem;
    text.setAttributeNode(att);

    att = document.createAttribute('type');
    att.value = 'disc';
    text.setAttributeNode(att);

    text.appendChild(document.createTextNode(elem));
    let node = document.createElement('ul');
    text.appendChild(node);
    folder.children[0].appendChild(text);
}