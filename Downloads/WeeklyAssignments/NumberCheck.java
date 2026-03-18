import java.util.Scanner;

class NumberCheck
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);

        int arr[] = new int[5];
        int i;

        // Taking input
        for(i = 0; i < arr.length; i++)
        {
            System.out.print("Enter number " + (i+1) + " : ");
            arr[i] = s.nextInt();
        }

        System.out.println("\nResult");

        // Checking numbers
        for(i = 0; i < arr.length; i++)
        {
            if(arr[i] > 0)
            {
                if(arr[i] % 2 == 0)
                {
                    System.out.println(arr[i] + " is Positive and Even");
                }
                else
                {
                    System.out.println(arr[i] + " is Positive and Odd");
                }
            }
            else if(arr[i] < 0)
            {
                System.out.println(arr[i] + " is Negative");
            }
            else
            {
                System.out.println(arr[i] + " is Zero");
            }
        }

        // Comparing first and last element
        System.out.println("\nComparison of First and Last Element");

        if(arr[0] == arr[4])
        {
            System.out.println("First and Last elements are Equal");
        }
        else if(arr[0] > arr[4])
        {
            System.out.println("First element is Greater than Last element");
        }
        else
        {
            System.out.println("First element is Less than Last element");
        }
    }
}