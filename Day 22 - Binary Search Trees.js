
function getHeight(root){
   if(!root) return -1;
    return Math.max(this.getHeight(root.left) + 1, this.getHeight(root.right) + 1);
}
