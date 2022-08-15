public class Solution {
    public int Reverse(int x) {
       var rest = 0;
        var currentDivision = x;
        var canDivide = true;
        Array<Float> result = new Array<Float>();
        var max = Math.Pow(2,31);
        var min = Math.Pow(2,31) * -1;
        if(x >= max || x <= min){
            return 0;
        }
        if(x < 0){
            currentDivision = currentDivision * -1
        }
        while(canDivide){
            if (currentDivision > 9) {
                rest = currentDivision % 10;
                currentDivision = Math.floor(currentDivision / 10);
            } else {
                canDivide = false;
                rest = Math.floor(currentDivision);
            }
      result.push(rest);
        }
    }
}