function GetElement(path = [])
{
    let iter = document.body.children[0].children['folder_root'];
    for (let fold of path)
    {
        if (iter == undefined || iter.children.length == 0) return undefined;
        iter = iter.children[0].children['folder_' + fold];
    }
    return iter;
}

function IsAvailable(folder, elem)
{
    if (folder.children[0].children.length == 0) return true;
    for (let i = 0; i<folder.children[0].children.length; i++)
    {
        if (folder.children[0].children[i].attributes['name'].value == elem) return false;
    }
    return true;
}